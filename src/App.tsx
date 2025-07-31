import Numbers from './components/never/Numbers'

function App() {
    return (
        <div className="grid h-screen place-items-center bg-gray-900 text-white">
            <div>
                <h1 className="text-base font-medium">
                    React with Typescript!
                </h1>

                {/* <Lists items={['Batman', 'Superman']} />

                <Lists items={[1, 2]} /> */}

                {/* <Lists
                    items={[
                        {id: 1, name: 'john', email: 'hello@gmail.com' },
                        {id: 2, name: 'sam', email: 'sam@gmail.com' },
                    ]}
                /> */}

                <Numbers
                    value={10}
                    isNegative
                />
            </div>
        </div>
    )
}

export default App
