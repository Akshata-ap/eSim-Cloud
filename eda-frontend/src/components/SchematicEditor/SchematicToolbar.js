import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Tooltip } from '@material-ui/core'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'
import FolderIcon from '@material-ui/icons/Folder'
import EditIcon from '@material-ui/icons/Edit'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import UndoIcon from '@material-ui/icons/Undo'
import RedoIcon from '@material-ui/icons/Redo'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import DeleteIcon from '@material-ui/icons/Delete'
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan'
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined'
import BugReportIcon from '@material-ui/icons/BugReport'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import { makeStyles } from '@material-ui/core/styles'

import MenuButton from './MenuButton'
import { ZoomIn, ZoomOut, ZoomAct, DeleteComp, PrintPreview, ErcCheck, Rotate, Undo, Redo } from './Helper/ToolbarTools'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: 'auto',
    marginRight: theme.spacing(0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  tools: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0.5),
    color: '#404040'
  },
  pipe: {
    fontSize: '1.45rem',
    color: '#d6c4c2',
    margin: theme.spacing(0, 1.5)
  }
}))

export default function SchematicToolbar ({ mobileClose }) {
  const classes = useStyles()

  return (
    <>
      <MenuButton title={'File'} iconType={FolderIcon} items={['New', 'Open', 'Save', 'Print', 'Export']} />
      <MenuButton title={'Edit'} iconType={EditIcon} items={['Cut', 'Copy', 'Paste']} />
      <MenuButton title={'Simulate'} iconType={PlayCircleOutlineIcon} items={['DC Simulation', 'DC Sweep', 'Time Domain Simulation', 'Frequency Domain Simulation']} />
      <span className={classes.pipe}>|</span>

      <Tooltip title="Undo">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={Undo}>
          <UndoIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Redo">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={Redo}>
          <RedoIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span className={classes.pipe}>|</span>

      <Tooltip title="Zoom In">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={ZoomIn}>
          <ZoomInIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Zoom Out">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={ZoomOut}>
          <ZoomOutIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Default Size">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={ZoomAct}>
          <SettingsOverscanIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span className={classes.pipe}>|</span>

      <Tooltip title="Print Preview">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={PrintPreview}>
          <PrintOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span className={classes.pipe}>|</span>

      <Tooltip title="Rotate">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={Rotate}>
          <RotateRightIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="ERC Check">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={ErcCheck}>
          <BugReportIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span className={classes.pipe}>|</span>

      <Tooltip title="Delete">
        <IconButton color="inherit" className={classes.tools} size="small" onClick={DeleteComp}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Help">
        <IconButton color="inherit" className={classes.tools} size="small">
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='end'
        size="small"
        onClick={mobileClose}
        className={classes.menuButton}
      >
        <AddBoxOutlinedIcon fontSize="small" />
      </IconButton>
    </>
  )
}

SchematicToolbar.propTypes = {
  mobileClose: PropTypes.func
}
