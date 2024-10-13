import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/features/counter/counter'
import { useGetInspirationQuery } from '@/services/inspiration/inspiration'

export default function Home() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(increment())
  }
  const handleClickDown = () => {
    dispatch(decrement())
  }
  const { data, error } = useGetInspirationQuery()
  return (
    <main className="bg-yellow-100">
      <div className="w-100 md:w-2/5 mx-auto p-8">
        <span className="text-6xl">Inspiration</span>
      </div>
      <div className="w-100 md:w-2/5 mx-auto p-8">
        {data &&
          data.map((inspiration) => (
            <div className="py-4 px-2">
              <blockquote className="text-2xl">{inspiration.q}</blockquote>
              <p>{inspiration.a}</p>
            </div>
          ))}
      </div>
    </main>
  )
}
