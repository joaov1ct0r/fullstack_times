/*
  Warnings:

  - You are about to drop the `time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "time";

-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jogador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,

    CONSTRAINT "jogador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "times_nome_key" ON "times"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "jogador_nome_key" ON "jogador"("nome");

-- AddForeignKey
ALTER TABLE "jogador" ADD CONSTRAINT "jogador_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
