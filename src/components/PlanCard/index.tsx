import React, { FC } from "react";
import { UrlPlan } from "../../interfaces/urlPlans";

import './styles.css'

interface PlanCardProps {
  plan: UrlPlan,
  setSelectedPlan: (plan) => void,
  withoutChooseButton: boolean
}

export const PlanCard: FC<PlanCardProps> = (props) => {
  const {
    plan,
    setSelectedPlan = (plan) => {},
    withoutChooseButton = false
  } = props

  return (
    <div className={`card border-${plan?.id}`}>
      <div className={`card-title ${plan?.id}`}>
        {plan?.name}
      </div>

      <div className="card-body">
        {plan?.description}

        <div className={`color-text-${plan?.id} font-bold flex flex-col items-center`}>
          <p>
            Monitoring {plan?.qtyUrls} Url(s)
          </p>
          <p>
            Frequency: Every {plan?.frequencyHrs}Hr(s)
          </p>
        </div>

        <div className={`color-text-${plan?.id}`}>
          <div
            className="price"
            style={{
              lineHeight: plan?.price > 0 && "60px",
              marginTop: plan?.price > 0 && "10px"
            }}
          >
            {plan?.price > 0 ? `${plan?.price}$` : "Free"}
          </div>
          {
            plan?.price > 0 &&
            <p className="per-month-text">
              Per Month
            </p>
          }
        </div>
      </div>

      {
        !withoutChooseButton &&
        <div className="card-footer">
          <button
            className="btn-primary"
            onClick={() => setSelectedPlan(plan)}
          >
            Choise
          </button>
        </div>
      }

    </div>
  )
}