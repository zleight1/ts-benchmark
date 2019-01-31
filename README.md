# ts-benchmark
TypeScript benchmark

# Basic Flow
## 1 sync runner

Base

## 1 sync instruction

Base

## 4 sync steps

Base

StepOne -> Base
StepTwo -> Base
StepThree -> Base
StepFour -> Base

## 3 sync service types 

Base

Internal -> Base

ExternalShared -> Base

ExternalOne -> ExternalShared -> Base
ExternalTwo -> ExternalShared -> Base

## 3 record type handlers each

Base

InternalOne -> Base 
InternalTwo -> Base 
InternalThree -> Base 

ExternalShared -> Base

ExternalAOne -> ExternalShared -> Base
ExternalATwo -> ExternalShared -> Base
ExternalAThree -> ExternalShared -> Base

ExternalBOne -> ExternalShared -> Base
ExternalBTwo -> ExternalShared -> Base
ExternalBThree -> ExternalShared -> Base

## 3 record types each

Base

InternalOne -> Base 
InternalTwo -> Base 
InternalThree -> Base 

ExternalAOne -> Base
ExternalATwo -> Base
ExternalAThree -> Base

ExternalBOne -> Base
ExternalBTwo -> Base
ExternalBThree -> Base

## 3 "APIs"

These will fake api calls

InternalAPI

ExternalBase

ExternalA -> ExternalBase
ExternalB -> ExternalBase
