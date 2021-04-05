import { defineController } from './$relay'
import { getShops } from '$/service/shops'

export default defineController({ getShops }, ({ getShops }) => ({
  get: async ({ query }) => ({
    status: 200,
    body: (await getShops()).slice(0, query.limit)
  })
}))
