/*
  Warnings:

  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.
  - The `rating` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genre",
ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "language" TEXT,
ADD COLUMN     "popularity" DOUBLE PRECISION,
ADD COLUMN     "posterUrl" TEXT,
ADD COLUMN     "revenue" DOUBLE PRECISION,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "tagline" TEXT,
ADD COLUMN     "trailerUrl" TEXT,
ADD COLUMN     "voteCount" INTEGER,
DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION;
