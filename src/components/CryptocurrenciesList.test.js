import React from 'react'
import ConnectedCryptocurrenciesList, { CryptocurrenciesList } from './CryptocurrenciesList'
import { mount, shallow } from 'enzyme'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { INITIAL_STORE } from '../../test/mocks.js'
const CURRENCIES = [
      {
        id: 3857,
        name: 'GoldenFever',
        symbol: 'GFR',
        slug: 'goldenfever',
        num_market_pairs: 0,
        date_added: '2019-04-12T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 275264.3936,
        platform: null,
        cmc_rank: 2406,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.000496169437175,
            volume_24h: null,
            percent_change_1h: 0,
            percent_change_24h: -2.84217e-14,
            percent_change_7d: -2.84217e-14,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 2515,
        name: 'ACChain',
        symbol: 'ACC',
        slug: 'acchain',
        num_market_pairs: 1,
        date_added: '2018-02-10T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: null,
        platform: null,
        cmc_rank: 2405,
        last_updated: '2019-10-15T17:46:07.000Z',
        quote: {
          USD: {
            price: 0.010108293212,
            volume_24h: null,
            percent_change_1h: 0,
            percent_change_24h: -2.84217e-14,
            percent_change_7d: 9.22191,
            market_cap: null,
            last_updated: '2019-10-15T17:46:07.000Z'
          }
        }
      },
      {
        id: 4139,
        name: 'Brazilian Digital Token',
        symbol: 'BRZ',
        slug: 'brz',
        num_market_pairs: 2,
        date_added: '2019-07-19T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 1702010.2,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0x420412e765bfa6d85aaac94b4f7b708c89be2e2b'
        },
        cmc_rank: 2404,
        last_updated: '2019-10-15T17:46:13.000Z',
        quote: {
          USD: {
            price: 0.236193250651,
            volume_24h: 0,
            percent_change_1h: -1.42109e-14,
            percent_change_24h: -0.521968,
            percent_change_7d: -1.42353,
            market_cap: null,
            last_updated: '2019-10-15T17:46:13.000Z'
          }
        }
      },
      {
        id: 3984,
        name: 'Lucky Block Network',
        symbol: 'LBN',
        slug: 'lucky-block-network',
        num_market_pairs: 2,
        date_added: '2019-05-31T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 99990000,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0xb9843e5de0f37d1e22c8075e5814e13565fe7c22'
        },
        cmc_rank: 2403,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.0134564134981,
            volume_24h: 0,
            percent_change_1h: -1.42109e-14,
            percent_change_24h: -2.84217e-14,
            percent_change_7d: 3.55271e-13,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 3981,
        name: 'Toqqn',
        symbol: 'TQN',
        slug: 'toqqn',
        num_market_pairs: 2,
        date_added: '2019-05-31T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 1000000000,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0x6613876533bc69b9dd628611a4d5dd2ccd8c7638'
        },
        cmc_rank: 2402,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.0000913922141053,
            volume_24h: 0,
            percent_change_1h: 0,
            percent_change_24h: 4.26326e-14,
            percent_change_7d: -2.70006e-13,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 3900,
        name: 'Hellenic Node',
        symbol: 'HN',
        slug: 'hellenic-node',
        num_market_pairs: 1,
        date_added: '2019-05-01T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 86577000,
        platform: null,
        cmc_rank: 2401,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.000103355999323,
            volume_24h: 0,
            percent_change_1h: 0,
            percent_change_24h: -4.26326e-14,
            percent_change_7d: -1.42109e-13,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 3865,
        name: 'BIZKEY',
        symbol: 'BZKY',
        slug: 'bizkey',
        num_market_pairs: 1,
        date_added: '2019-04-16T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 10000000000,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0xd28cfec79db8d0a225767d06140aee280718ab7e'
        },
        cmc_rank: 2400,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.000113344822669,
            volume_24h: 0,
            percent_change_1h: 0,
            percent_change_24h: -1.69995,
            percent_change_7d: 6.95567,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 3864,
        name: 'UTEMIS',
        symbol: 'UTS',
        slug: 'utemis',
        num_market_pairs: 2,
        date_added: '2019-04-15T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 700000000,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0x979ebc09e55ea0ab563cf7175e4c4b1a03afc19a'
        },
        cmc_rank: 2399,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.0000488514385189,
            volume_24h: 0,
            percent_change_1h: 0,
            percent_change_24h: 2.84217e-14,
            percent_change_7d: 0.320427,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 3852,
        name: 'HUDDL',
        symbol: 'HUDDL',
        slug: 'huddl',
        num_market_pairs: 3,
        date_added: '2019-06-19T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 100000000,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0x5137a403dd25e48de528912a4af62881e625d801'
        },
        cmc_rank: 2398,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.00198836412116,
            volume_24h: 0,
            percent_change_1h: 0,
            percent_change_24h: 2.84217e-14,
            percent_change_7d: 0.000349613,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      },
      {
        id: 3848,
        name: 'OOOBTC TOKEN',
        symbol: 'OBX',
        slug: 'ooobtc-token',
        num_market_pairs: 5,
        date_added: '2019-04-08T00:00:00.000Z',
        tags: [],
        max_supply: null,
        circulating_supply: null,
        total_supply: 3000000000,
        platform: {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          token_address: '0x1367d4a67c1719b58c7e05df8768226fa768279a'
        },
        cmc_rank: 2397,
        last_updated: '2019-10-15T17:46:12.000Z',
        quote: {
          USD: {
            price: 0.00184713292069,
            volume_24h: 0,
            percent_change_1h: 2.84217e-14,
            percent_change_24h: -0.677304,
            percent_change_7d: 59.9548,
            market_cap: null,
            last_updated: '2019-10-15T17:46:12.000Z'
          }
        }
      }
    ]
const getCurrenciesMock = jest.fn()

describe('CryptocurrenciesList component', () => {

  it('renders correctly with error', () => {
    const wrapper = shallow(
      <CryptocurrenciesList
        error={'commonError'}
        fetching={false}
        getCurrenciesList={getCurrenciesMock}
        cyrptocurrencies={[]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with fetching', () => {
    const wrapper = shallow(
      <CryptocurrenciesList
        error={null}
        fetching={true}
        getCurrenciesList={getCurrenciesMock}
        cyrptocurrencies={[]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with empty list', () => {
    const wrapper = shallow(
      <CryptocurrenciesList
        error={null}
        fetching={false}
        getCurrenciesList={getCurrenciesMock}
        cyrptocurrencies={[]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with currencies', () => {
    const wrapper = shallow(
      <CryptocurrenciesList
        error={null}
        fetching={false}
        getCurrenciesList={getCurrenciesMock}
        cyrptocurrencies={CURRENCIES}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  let wrapper
  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState])

  beforeEach(() => {
    wrapper = shallow(
      <CryptocurrenciesList
        error={null}
        fetching={false}
        getCurrenciesList={getCurrenciesMock}
        cyrptocurrencies={CURRENCIES}
      />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Sort', () => {
    it('by name', () => {

      wrapper.find(TableCell).at(0).props().onClick()
      expect(setState).toHaveBeenCalledWith('name')
    })

    it('by symbol', () => {

      wrapper.find(TableCell).at(1).props().onClick()
      expect(setState).toHaveBeenCalledWith('symbol')
    })

    it('by total_supply', () => {

      wrapper.find(TableCell).at(2).props().onClick()
      expect(setState).toHaveBeenCalledWith('total_supply')
    })

    it('by num_market_pairs', () => {

      wrapper.find(TableCell).at(3).props().onClick()
      expect(setState).toHaveBeenCalledWith('num_market_pairs')
    })

    it('by date_added', () => {

      wrapper.find(TableCell).at(4).props().onClick()
      expect(setState).toHaveBeenCalledWith('date_added')
    })
  })

  describe('change page', () => {
    it('by name', () => {

      wrapper.find(TablePagination).at(0).props().onChangePage(null, 2)
      expect(setState).toHaveBeenCalledWith(2)
    })
  })
})

describe('ConnectedCryptocurrenciesList', () => {
  const mockStore = configureStore()
  let wrapper
  let store

  store = mockStore(INITIAL_STORE)

  wrapper = mount(
      <Provider store={store}>
        <ConnectedCryptocurrenciesList />
      </Provider>
  )

  it('Stays the same as before with id and application', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Actions called properly', () => {
    const ChildComponent = wrapper.find(CryptocurrenciesList)
    expect(ChildComponent.props().getCurrenciesList(1, 10, 'date_added')).toEqual({ "payload": {
    limit: 10,
    page: 1,
    sort: "date_added"
  }, "type": "cryptocurrencies/request" })
  })
})
