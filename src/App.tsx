import Text from './components/polymorphic/Text'

function App() {
    return (
        <div className="grid h-screen place-items-center bg-gray-900 text-white">
            <div>
                <Text
                    as="h2"
                    size="text-base">
                    Heading
                </Text>
                <Text
                    as="p"                   
                    size="text-sm">
                    Paragraph
                </Text>
                <Text
                    as="label"
                    htmlFor="form-tag"
                    size="text-xs">
                    Label
                </Text>
            </div>
        </div>
    )
}

export default App
