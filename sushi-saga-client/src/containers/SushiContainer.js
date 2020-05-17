import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushi.map(s => < Sushi sushi={s} key={s.id} handleEatSushi={props.handleEatSushi} eaten={props.eatenSushi.includes(s)}/> )
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer