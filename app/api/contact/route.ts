import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.formData();

    const firstName = data.get("firstName")?.toString();
    const lastName = data.get("lastName")?.toString();
    const email = data.get("email")?.toString();
    const company = data.get("company")?.toString() || "";
    const phone = data.get("phone")?.toString();
    const message = data.get("message")?.toString();

    if (!firstName || !lastName || !email || !phone || !message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const name = `${firstName} ${lastName}`;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({
            auth,
            version: "v4",
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
            range: "A1:E1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[name, email, phone, company, message]],
            },
        });

        return NextResponse.json({ data: response.data }, { status: 200 });
    } catch (error) {
        console.error("Google Sheets API error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
