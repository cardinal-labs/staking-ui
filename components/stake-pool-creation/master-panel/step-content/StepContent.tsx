import type { FormikHandlers, FormikState, FormikValues } from 'formik'
import type { Dispatch, SetStateAction } from 'react'
import type { Mint } from 'spl-token-v3'

import { Intro } from '@/components/stake-pool-creation/master-panel/Intro'
import { AdditionalFeatures } from '@/components/stake-pool-creation/master-panel/step-content/AdditionalFeatures'
import { Authorization } from '@/components/stake-pool-creation/master-panel/step-content/authorization/Authorization'
import { RewardDistribution } from '@/components/stake-pool-creation/master-panel/step-content/RewardDistribution'
import { Summary } from '@/components/stake-pool-creation/master-panel/step-content/Summary'
import type { SlavePanelScreens } from '@/components/stake-pool-creation/SlavePanel'

export type FlowType = 'create' | 'update'

export type StepContentProps = {
  currentStep: number
  setActiveSlavePanelScreen: Dispatch<SetStateAction<SlavePanelScreens>>
  formState: FormikHandlers & FormikState<FormikValues> & FormikValues
  mintInfo?: Mint
  type: FlowType
}

export const StepContent = ({
  currentStep,
  setActiveSlavePanelScreen,
  formState,
  mintInfo,
  type,
}: StepContentProps) => {
  return (
    <div className="h-full">
      {currentStep === 0 && <Intro />}
      {currentStep === 1 && (
        <Authorization
          setActiveSlavePanelScreen={setActiveSlavePanelScreen}
          formState={formState}
        />
      )}
      {currentStep === 2 && (
        <RewardDistribution
          type={type}
          mintInfo={mintInfo}
          setActiveSlavePanelScreen={setActiveSlavePanelScreen}
          formState={formState}
        />
      )}
      {currentStep === 3 && (
        <AdditionalFeatures
          setActiveSlavePanelScreen={setActiveSlavePanelScreen}
          formState={formState}
        />
      )}
      {currentStep === 4 && (
        <Summary mintInfo={mintInfo} formState={formState} />
      )}
    </div>
  )
}
