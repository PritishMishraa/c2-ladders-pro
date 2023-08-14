"use client";

import React, { useState, useEffect } from "react";
import { GoalCard } from "@/components/goal-card";
import { Shell } from "@/components/shell";
import { TableShell } from "@/components/table-shell";

export default function Home() {
  const [rating, setRating] = useState(1200);

  useEffect(() => {
    const savedRating = localStorage.getItem("selectedRating");

    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedRating", rating.toString());
  }, [rating]);

  const handleRatingChange = (newRating: number) => {
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
