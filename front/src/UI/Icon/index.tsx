import { Component } from "solid-js";
import { IconKey, IconProps } from "./interfaces";
import * as Icons from './Icons'
import classes from './style.module.css'

export const Icon: Component<IconProps> = (props) => {
    const iconKey = IconKey[props.name]
    const Icon = Icons[iconKey]
    const size = props.size || 'md'

    if (!Icon) {
        console.error(`Key "${iconKey}" not implemented as icon`)
        return null
    }
    
    return <Icon class={classes.icon} classList={{
        [classes.iconSm]: size === 'sm',
        [classes.iconMd]: size === 'md',
        [classes.iconLg]: size === 'lg',
    }} />
}