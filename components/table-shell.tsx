"use client";
import React from "react";
import { z } from "zod";
import { Metadata } from "next";

import { ProblemStatus } from "@/types/types";
import { columns } from "./data-table/columns";
import { DataTable } from "./data-table/data-table";
import { Question, questionSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Questions",
  description: "A task and issue tracker build using Tanstack Table.",
};

async function getQuestions(rating: number) {
  const response = await fetch(`/api/question?rating=${rating}`);

  let { data: questions }: { data: Question[] } = await response.json();

  questions = questions.map((question) => {
    return { ...question, status: ProblemStatus.NONE };
  });

  return z.array(questionSchema).parse(questions);
}

interface TableShellProps {
  rating: number;
}

export function TableShell({ rating }: TableShellProps) {
  const [questions, setQuestions] = React.useState<Question[]>([]);

  React.useEffect(() => {
    async function fetchQuestions() {
      const newQuestions = await getQuestions(rating);
      setQuestions(newQuestions);
    }

    fetchQuestions();
  }, [rating]);

  return <DataTable data={questions} columns={columns} />;
}
