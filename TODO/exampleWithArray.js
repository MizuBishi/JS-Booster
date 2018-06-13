// React
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

// Base Components
import {
  // Atoms
  ContractIcon,

  // Mixins
  toCollapsible,
} from '@optune/react-base-components'

// Local Containers
import Uploader from '../../../containers/Attachments'

// Reference Text
import referenceText, {
  categories,
  types,
} from '../../../resources/referenceText'

// utils
import getFields from '../../utils/getFields'

const DocumentsContent = toCollapsible(props => (
  <div className="row push bottom large">
    {/* Additonal Information */}
    <div className="column third push top medium">
      <Uploader
        {...props}
        category="document"
        label="Add other Document"
        noField
      />
    </div>

    <div className="column third flex-center-middle tablet hide">
      <h3 className="font-medium-bold flex-center-middle push top large">
        <ContractIcon className="big" />
      </h3>
    </div>
  </div>
))

DocumentsContent.propTypes = {
  input: PropTypes.object,
}

const DocumentsCollapsible = ({ input, ...other }) => {
  const attachments = Array.isArray(input.value) ? input.value.filter(att =>
    ['document'].includes(att.category)) : []

  return (
    <DocumentsContent
      title={referenceText.byRef({
        category: categories.COLLAPSIBLE,
        type: types.TITLE,
        ref: 'documents',
      })}
      titleContent={attachments.length > 0 ? attachments.length : undefined}
      input={input}
      {...other}
    />
  )
}

DocumentsCollapsible.propTypes = {
  input: PropTypes.object,
}

const DocumentField = ({ readonly, ...other }) => {
  const fields = getFields(['attachments'], readonly)
  return (
    <Field
      component={DocumentsCollapsible}
      {...fields.attachments}
      {...other}
    />
  )
}

DocumentField.propTypes = {
  readonly: PropTypes.bool,
}

export default DocumentField
