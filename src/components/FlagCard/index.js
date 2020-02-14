import React from "react";
import PropTypes from "prop-types";
import {
    Card,
} from 'semantic-ui-react'

export default function FlagCard({children, user}) {
    return (
    <Card>
      <Card.Content>
        {React.cloneElement(children, { user })}
        {user.countryCode && <img src={`https://www.countryflags.io/${user.countryCode.toLowerCase()}/shiny/64.png`} />}
        {user.content && <p>{user.content}</p>}
      </Card.Content>
    </Card>
    )
}

FlagCard.propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.shape({
        countryCode: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
}