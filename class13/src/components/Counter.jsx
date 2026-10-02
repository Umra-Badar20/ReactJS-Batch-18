import React, { useState } from 'react'
import { decrement, increment, incByAmount,decByAmount } from '../redux/features/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [num, setNum] = useState("")

    return (
        <div>
            <div>
                <button className='px-5 py-3 border rounded m-4'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className='p-5 text-3xl font-bold'>{count}</span>
                <button className='px-5 py-3 border rounded m-4'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement(5))}
                >
                    Decrement
                </button>
            </div>
            <input value={num} onChange={(e) => setNum(e.target.value)} type="number" placeholder='Enter a number to be changed' />
            <button onClick={() => {
                dispatch(incByAmount(Number(num)))
                setNum("")
            }

            }>Increment By Amount</button>
            <button onClick={() => {
                dispatch(decByAmount(Number(num)))
                setNum("")
            }

            }>Decrement By Amount</button>
        </div>
    )
}