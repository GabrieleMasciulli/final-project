/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

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

const PaginationRanges = ({
  pagination,
  count,
  maxPage,
  pageChage,
  rowsChange,
}) => {
  const classes = useStyles()

  return (
    <div className='pagination-wrapper'>
      <div className='current-rows'>
        <p>
          Showing {pagination.page * pagination.rows - pagination.rows + 1} -{' '}
          {pagination.page * pagination.rows} rows out of {pagination.count}
        </p>
      </div>
      <div className={classes.root}>
        <Pagination
          classes={{ ul: classes.ul }}
          count={count}
          page={pagination.page}
          onChange={pageChage}
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
          content={<TippyContent handleClick={rowsChange} />}
        >
          <div className='rows-dropdown'>
            {pagination.rows}
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Tippy>
      </div>
    </div>
  )
}

export default PaginationRanges
