import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'

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
    '& .MuiPaginationItem-page:hover': {
      backgroundColor: '#2196F3',
      color: '#ffff',
    },
  },
}))

const PaginationRanges = ({ count }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Pagination classes={{ ul: classes.ul }} count={count} defaultPage={1} />
    </div>
  )
}

export default PaginationRanges
