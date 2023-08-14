"use client";

import React, { useState, useEffect } from "react";
import { GoalCard } from "@/components/goal-card";
import { Shell } from "@/components/shell";
import { TableShell } from "@/components/table-shell";

export default function Home() {
  const storedRating = localStorage.getItem("selectedRating");
  const initialRating = storedRating ? parseInt(storedRating) : 1200;
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating: number) => {
    localStorage.setItem("selectedRating", newRating.toString());
    setRating(newRating);
  };

  return (
    <div>
      <GoalCard rating={rating} onRatingChange={handleRatingChange} />
      <Shell>
        <TableShell rating={rating} />
      </Shell>
    </div>
  );
}
