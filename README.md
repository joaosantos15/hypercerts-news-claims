# DClaims-News-Claims

Hypercerts News Claims Data Modal

### Table of Contents

-   [SingleClaim](#singleclaim)
-   [BatchClaim](#batchclaim)

## SingleClaim

Get an instance of a SingleClaim object

**Parameters**

-   `issuerId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Ethereum address of the Issuer
-   `articleId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** ID of the news article
-   `category` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Category of the classification
-   `freeText` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Arbitrary text

Returns **SingleClaim**

## BatchClaim

Get an instance of a BatchClaim object

**Parameters**

-   `articleId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** ID of the news article
-   `issuerId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Ethereum address of the Provider
-   `claimsList` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of SingleClaims objects

Returns **BatchClaim**
