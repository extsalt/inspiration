import { useGetInspirationQuery } from '@/services/inspiration/inspiration'

export default function Contact() {
  const { data, error, isLoading } = useGetInspirationQuery()

  return (
    <div>
      {Array.isArray(data) &&
        data.map((inspiration) => (
          <div>
            <blockquote>{inspiration.q}</blockquote>
          </div>
        ))}
    </div>
  )
}
