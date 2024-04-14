import { serial, text, timestamp, pgTable, json, PgArray  } from "drizzle-orm/pg-core";

type ITimings = {
    date: String,
    sleeptime: String,
    waketime: String,
    duration: String
}

export const timingSchema = pgTable("timings", {
    username: text("usernames").notNull(),
    timings: json("timings").array().$type<ITimings>().notNull()
})