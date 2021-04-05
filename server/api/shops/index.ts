import { Shop } from '$/types'

export type Methods = {
  get: {
    query: {
      limit: number
    }

    resBody: Shop[]
  }
}
