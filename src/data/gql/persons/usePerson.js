import { useQuery } from 'react-apollo'
import { PERSON_QUERY } from './queries'

const usePerson = (personId) => {
  const { data, loading, error } = useQuery(PERSON_QUERY, {
    variables: {
      id: personId,
    }
  })

  if (error) {
    console.error(error)
  }

  return {
    loading,
    person: data && data.person
  }
}

export default usePerson

