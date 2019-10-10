/* Global imports */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { array, func } from 'prop-types'

/* Local imports */
import {
  getList,
  request,
} from '../store/reducers/cryptocurrencies'

/* Component definition */
const CyrptocurrenciesList = ({ cyrptocurrencies, getCurrenciesList }) => {
  useEffect(() => {
    getCurrenciesList(1, 10)
  }, [getCurrenciesList])

  return (
    <div>
      CyrptocurrenciesList
      {
        cyrptocurrencies.map(cyrptocurrency => {
          return (
            <div key={cyrptocurrency.id}>
              { JSON.stringify(cyrptocurrency) }
            </div>
          )
        })
      }
    </div>
  )
}

/* PropTypes */
CyrptocurrenciesList.propTypes = {
  cyrptocurrencies:  array.isRequired,
  getCurrenciesList: func.isRequired,
}
CyrptocurrenciesList.defaultProps = {}

/* Local utility functions */

/* Styles */

const mapStateToProps = (state) => {
  return {
    cyrptocurrencies: getList(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrenciesList: (page, limit) => dispatch(request({ limit, page })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CyrptocurrenciesList)
