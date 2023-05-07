/*
  Warnings:

  - You are about to drop the column `STATUS` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "STATUS",
ADD COLUMN     "status" "TASK_STATUS" NOT NULL DEFAULT 'NOT_STARTED';
