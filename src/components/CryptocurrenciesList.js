/* Global imports */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { array, bool, func, string } from 'prop-types'
import styled from 'styled-components'

/* Material-UI */
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'
import CircularProgress from '@material-ui/core/CircularProgress'

/* Local imports */
import {
  getList,
  getFetching,
  getError,
  request,
} from '../store/reducers/cryptocurrencies'
import Text from './Text'

/* Component definition */

export const CryptocurrenciesList = ({
  error,
  fetching,
  cyrptocurrencies,
  getCurrenciesList,
}) => {
  // NOTE: React.useState instead of useState Needed to spy on in tests.
  const [page, setPage] = React.useState(0)
  const [sort, setSort] = React.useState('market_cap')

  useEffect(() => {
    if (page + 1 >= 1) {
      getCurrenciesList(page + 1, 10, sort)
    }
  }, [getCurrenciesList, page, sort])

  if (error) {
    return (
      <Container>
        <Text translate={false}>{error}</Text>
      </Container>
    )
  }

  if (fetching && cyrptocurrencies.length === 0) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }

  return (
    <Container>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => setSort('name')}>
                <HeaderTitle active={sort === 'name'}>currency</HeaderTitle>
              </TableCell>
              <TableCell align="right" onClick={() => setSort('symbol')}>
                <HeaderTitle active={sort === 'symbol'}>symbol</HeaderTitle>
              </TableCell>
              <TableCell align="right" onClick={() => setSort('total_supply')}>
                <HeaderTitle active={sort === 'total_supply'}>total_supply</HeaderTitle>
              </TableCell>
              <TableCell align="right" onClick={() => setSort('num_market_pairs')}>
                <HeaderTitle active={sort === 'num_market_pairs'}>numberMarketPairs</HeaderTitle>
              </TableCell>
              <TableCell align="right" onClick={() => setSort('date_added')}>
                <HeaderTitle active={sort === 'date_added'}>dateAdded</HeaderTitle>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cyrptocurrencies.map(currency => (
              <TableRow key={currency.id}>
                <TableCell component="th" scope="currency">
                  {currency.name}
                </TableCell>
                <TableCell align="right">{currency.symbol}</TableCell>
                <TableCell align="right">{currency.total_supply}</TableCell>
                <TableCell align="right">{currency.num_market_pairs}</TableCell>
                <TableCell align="right">{new Date(currency.date_added).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={2399} // NOTE: How to get currencies total from the backend.
          rowsPerPage={10}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={(e, page) => setPage(page)}
        />
      </Paper>
    </Container>
  )
}

/* PropTypes */
CryptocurrenciesList.propTypes = {
  cyrptocurrencies:  array.isRequired,
  error:             string,
  fetching:          bool,
  getCurrenciesList: func.isRequired,
}
CryptocurrenciesList.defaultProps = {}

/* Local utility functions */

/* Styles */
const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  min-height: 500px;
`

const HeaderTitle = styled(Text)`
  font-weight: ${p => p.active ? 'bold' : 'normal'};
  &:hover {
    cursor: pointer;
  }
`

const mapStateToProps = (state) => {
  return {
    cyrptocurrencies: getList(state),
    error:            getError(state),
    fetching:         getFetching(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrenciesList: (page, limit, sort) => dispatch(request({ limit, page, sort })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrenciesList)
