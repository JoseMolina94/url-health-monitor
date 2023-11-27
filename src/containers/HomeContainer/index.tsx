'use client'
import React, { useState, useEffect } from "react";
import {Banner} from "../../components/Banner/index";
import {PlansList} from "../../components/PlansList/index";
import {urlPlansList} from "../../constants/urlPlansData";
import { UrlPlan } from "../../interfaces/urlPlans";
import { RegistrationAndPaymentForm } from "../../components/RegistrationAndPaymentForm/index";

import './styles.css'

export const HomeContainer = () => {
  const [selectedPlan, setSelectedPlan] = useState<UrlPlan | null>(null)

  useEffect(() => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPlan?.id])

  return (
    <div>
      <Banner />
      <div
        className=" plans-list-container"
      >
        <PlansList
          list={urlPlansList}
          setSelectedPlan={setSelectedPlan}
        />
      </div>

      <div id="form">
        {
          selectedPlan &&
          <RegistrationAndPaymentForm
            selectedPlan={selectedPlan}
          />
        }
      </div>
    </div>
  )
}
