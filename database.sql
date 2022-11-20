CREATE TABLE "countries" (
  "id" int PRIMARY KEY,
  "plate" varchar,
  "manufacture" varchar,
  "model" varchar,
  "image" varchar,
  "rentPerDay" integer,
  "capacity" integer,
  "description" varchar,
  "availableAt" timestamptz,
  "transmission" varchar,
  "available" boolean,
  "type" varchar,
  "year" integer,
  "createdAt" timestamptz,
  "updatedAt" timestamptz
);
