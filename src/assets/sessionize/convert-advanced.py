#!/usr/bin/env -S uv run --script
import sys
from pathlib import Path

import pandas as pd


BASE_DIR = Path(__file__).parent


def resolve_source_file():
    if len(sys.argv) <= 1:
        return BASE_DIR / "data-advanced.xlsx"

    source_file = Path(sys.argv[1]).expanduser()
    if source_file.is_absolute() or source_file.exists():
        return source_file

    return BASE_DIR / source_file


SOURCE_FILE = resolve_source_file()

SESSION_COLUMNS = [
    "Session Id",
    "Title",
    "Description",
    "Owner",
    "Owner Email",
    "Speakers",
    "Category",
    "Session format",
    "Session duration (workshops)",
    "Level",
    "Language",
    "Are you a Google employee or GDE?",
    "Country",
    "Owner Informed",
    "Owner Confirmed",
    "Room",
    "Scheduled At",
    "Scheduled Duration",
    "Live Link",
    "Recording Link",
    "Favorited Count",
    "Speaker Ids",
]

SPEAKER_COLUMNS = [
    "Speaker Id",
    "FirstName",
    "LastName",
    "Email",
    "TagLine",
    "Bio",
    "LinkedIn",
    "Company Website",
    "Instagram",
    "Blog",
    "Facebook",
    "Profile Picture",
]


def as_clean_string(value):
    if pd.isna(value):
        return ""

    return str(value).strip()


def normalize_output_columns(dataframe, columns):
    for column in columns:
        if column not in dataframe.columns:
            dataframe[column] = None

    return dataframe[columns]


def split_flattened_export(dataframe):
    sessions = []

    for _, group in dataframe.groupby("Session Id", sort=False):
        first_row = group.iloc[0]
        speaker_ids = [as_clean_string(value) for value in group["Speaker Id"].tolist() if as_clean_string(value)]
        speaker_names = [
            f"{as_clean_string(row['FirstName'])} {as_clean_string(row['LastName'])}".strip()
            for _, row in group.iterrows()
        ]
        speaker_names = [name for name in speaker_names if name]

        sessions.append(
            {
                "Session Id": first_row["Session Id"],
                "Title": first_row["Title"],
                "Description": first_row["Description"],
                "Owner": first_row["Owner"],
                "Owner Email": first_row["Owner Email"],
                "Speakers": ", ".join(dict.fromkeys(speaker_names)),
                "Category": first_row.get("Category", first_row.get("Track")),
                "Session format": first_row["Session format"],
                "Session duration (workshops)": first_row.get("Session duration (workshops)"),
                "Level": first_row["Level"],
                "Language": first_row["Language"],
                "Are you a Google employee or GDE?": first_row.get("Are you a Google employee or GDE?"),
                "Country": first_row.get("Country"),
                "Owner Informed": first_row["Owner Informed"],
                "Owner Confirmed": first_row["Owner Confirmed"],
                "Room": first_row["Room"],
                "Scheduled At": first_row["Scheduled At"],
                "Scheduled Duration": first_row["Scheduled Duration"],
                "Live Link": first_row["Live Link"],
                "Recording Link": first_row["Recording Link"],
                "Favorited Count": first_row["Favorited Count"],
                "Speaker Ids": ", ".join(dict.fromkeys(speaker_ids)),
            }
        )

    sessions = normalize_output_columns(pd.DataFrame(sessions), SESSION_COLUMNS)

    speakers = (
        dataframe.sort_values(["Speaker Id"])
        .drop_duplicates(subset=["Speaker Id"], keep="first")
        .pipe(normalize_output_columns, SPEAKER_COLUMNS)
    )

    return sessions, speakers


workbook = pd.ExcelFile(SOURCE_FILE)

if {"Accepted sessions", "Accepted speakers"}.issubset(workbook.sheet_names):
    sessions = pd.read_excel(SOURCE_FILE, sheet_name="Accepted sessions")
    speakers = pd.read_excel(SOURCE_FILE, sheet_name="Accepted speakers")
elif "Accepted sessions and speakers" in workbook.sheet_names:
    flattened = pd.read_excel(SOURCE_FILE, sheet_name="Accepted sessions and speakers")
    sessions, speakers = split_flattened_export(flattened)
else:
    raise RuntimeError(
        f"Unsupported Sessionize export format. Found sheets: {', '.join(workbook.sheet_names)}"
    )

sessions.to_json(BASE_DIR / "sessions.json", orient="records", indent=2, force_ascii=False, date_format="iso")

speakers.to_json(BASE_DIR / "speakers.json", orient="records", indent=2, force_ascii=False, date_format="iso")

print(f"Exported {len(sessions)} sessions and {len(speakers)} speakers from {SOURCE_FILE}")
