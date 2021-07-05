/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, changeRows } from '../reducers/pagination'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  ul: {
    '& .MuiPaginationItem-root': {
      color: 'black',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: '#2196F3',
      color: '#ffff',
    },
    '& .MuiPaginationItem-page.Mui-selected:hover': {
      backgroundColor: '#2196F3',
      color: '#ffff',
    },
    '& .MuiPaginationItem-page:hover': {
      backgroundColor: 'rgb(239, 242, 245)',
      color: 'black',
    },
  },
}))

const TippyContent = ({ handleClick }) => {
  return (
    <div className='rows-dropdown-content'>
      <a href='#'>
        <button value='100' onClick={handleClick}>
          100
        </button>
      </a>

      <a href='#'>
        <button value='50' onClick={handleClick}>
          50
        </button>
      </a>

      <a href='#'>
        <button value='20' onClick={handleClick}>
          20
        </button>
      </a>
    </div>
  )
}

const PaginationRanges = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { rows, page, pageCount } = useSelector(state => state.pagination)
  const globalStats = useSelector(state => state.globalStats.formatted) || {}

  const cryptoCount = parseInt(globalStats.active_cryptocurrencies)

  const handleRowsChange = e => {
    const newRows = e.target.value
    dispatch(changeRows(newRows))
  }

  return (
    <div className='pagination-wrapper'>
      <div className='current-rows'>
        <p>
          Showing {page * rows - rows + 1} - {page * rows} rows out of{' '}
          {cryptoCount}
        </p>
      </div>
      <div className={classes.root}>
        <Pagination
          classes={{ ul: classes.ul }}
          count={pageCount || Math.ceil(cryptoCount / 20)}
          page={page}
          onChange={(event, page) => dispatch(changePage(page))}
        />
      </div>
      <div className='show-rows'>
        <p>Show rows</p>
        <Tippy
          interactive='true'
          className='show-rows-tooltip'
          arrow={false}
          allowHTML='true'
          placement='bottom'
          content={<TippyContent handleClick={handleRowsChange} />}
        >
          <div className='rows-dropdown'>
            {rows}
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Tippy>
      </div>
    </div>
  )
}

export default PaginationRanges
