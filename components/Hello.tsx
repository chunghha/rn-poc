import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Badge, WhiteSpace } from 'antd-mobile-rn'

export interface Props {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

interface State {
    enthusiasmLevel: number
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error("You could be a little more enthusiastic. :D")
        }

        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
    onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
    getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Hello {this.props.name}
                </Text>
                <WhiteSpace />
                <Badge size='large' text={this.getExclamationMarks(this.state.enthusiasmLevel)} />
                <WhiteSpace />
                <WhiteSpace />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            onClick={this.onDecrement}
                            accessibilityLabel="decrement"
                        >-</Button>
                    </View>

                    <View style={styles.button}>
                        <Button
                            onClick={this.onIncrement}
                            accessibilityLabel="increment"
                            type="primary"
                        >+</Button>
                    </View>
                </View>
            </View>
        )
    }
}

// styles

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 0
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#222",
        fontWeight: "bold"
    }
})