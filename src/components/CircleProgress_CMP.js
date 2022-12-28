import {CircleProgress} from 'react-gradient-progress'

export const ProgressCmp = ({percentage}) => {
  return (
    <CircleProgress className="meter" strokeLinecap="butt" percentage={percentage} strokeWidth={18} primaryColor={['#AA367C','#4A2FBD']}/>
  )
}
