import React, { FC } from "react";
import { UrlPlan } from "../../interfaces/urlPlans";
import { PlanCard } from "../PlanCard/index";

interface PlansListProps {
  list: UrlPlan [],
  setSelectedPlan: (plan) => void
}

export const PlansList: FC<PlansListProps> = (props) => {
  const {
    list = [],
    setSelectedPlan = (plan) => {}
  } = props

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 sm:gap-12 md:gap-4 justify-center">
      {list.map((item, index) => (
          <PlanCard
              plan={item}
              key={index}
              setSelectedPlan={setSelectedPlan}
          />
      ))}
    </div>
  );
};
