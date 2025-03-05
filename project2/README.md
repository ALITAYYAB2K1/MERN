# MongoDB Modeling Practice

In this section, we will cover how to create models in MongoDB using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js.

## Prerequisites

- Node.js installed
- MongoDB installed
- Basic knowledge of JavaScript

## Steps to Create a Model

1.  **Install Mongoose**:
    First, you need to install Mongoose. You can do this using npm:

    ```bash
    npm install mongoose
    ```

2.  **Define a Schema**:
    Define the schema for your model. A schema represents the structure of a document within a collection.

    ````javascript
    const { Schema } = mongoose;
    const userSchema = new mongoose.Schema(
    {
    username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    },
    password: {
    type: String,
    required: [true, "Password is required"],
    min: [8, "Password must be at least 8 characters long"],
    },
    },
    {
    timestamps: true,
    }
    );

        ```

    ````

3.  **Create a Model**:
    Create a model from the schema. A model is a class with which we construct documents.

    ```javascript
    const User = mongoose.model("User", userSchema);
    ```
