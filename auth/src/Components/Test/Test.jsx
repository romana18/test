import React from 'react'


function Test() {
    const appwrite = new Appwrite();
    appwrite
        .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
        .setProject('65ee32f5606b41242b1e') // Replace with your project ID
        .setKey('f0ac57e7bc98843115c61ad27a58b89168ee554d0687f89bc4be8be2a04bf318b2cbce651436f2a0f5320816c53e62e3ce287fd2beaab91ace3d9c3d9d149dcf9b98eb5701c5cd390fc9086bd06067cb7e22cdbedb1c16f350616497f0e4638a54ed4e7d4ebd7af3b61004aa5d400b34192212238a236312b6c419c148657d90'); // Replace with your API key

    return (
        <div>Test</div>
    )
}

export default Test