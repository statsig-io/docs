---
title: How to set up Feature Flags in Rust
sidebar_label: Feature Flags in Rust
slug: /developer-guides/feature-flags-in-rust
displayed_sidebar: cloud
---

To integrate feature flags into a Rust application with the Statsig SDK, you'll start by setting up a simple Rust "Hello World" app, then integrate Statsig to manage your feature flags. 

### Step 1: Create a Rust Project

Create a new Rust project using `cargo`. In your terminal, enter the following command:

```bash
cargo new statsig_rust_example
```

### Step 2: Add Statsig SDK to Project

In the newly created `Cargo.toml` file:

- Add `statsig` to the dependencies.
- Specify the latest version in the following format. We'll also need a package like tokio to manage the async nature of this application:

```toml
[dependencies]
statsig = "0.2.4"
tokio = { version = "1.0", features = ["full"] }
```

Next, begin writing your rust code in your main.rs file which you should find pre-created in your project: 

```toml
use statsig::{Statsig, StatsigUser};

#[tokio::main]
async fn main() {
    // Initialize the Statsig SDK with your Server Secret Key
    Statsig::initialize("secret-key").await;

    // Check if a feature flag is enabled for a user
    let user = StatsigUser::with_user_id("a-user".to_string());

    if Statsig::check_gate(&user, "example_feature_flag").unwrap_or(false) {
        println!("Feature Flag is enabled!");
    } else {
        println!("Hello, World!");
    }

    // Shut down the Statsig SDK before exiting the application
    Statsig::shutdown().await;
}
```

### Step 3: Create a Feature Flag in Statsig Console

1. **Sign Up/Login to Statsig**: Visit Statsig's website and sign up for an account or log in.

2. **Create a New Project**: Create a new project for your application in the Statsig dashboard.

3. **Navigate to Feature Flags**: Access the "Feature Flags" section from the dashboard.

4. **Create a New Feature Flag**: Click on "Create Feature Flag".

5. **Enter Feature Flag Name**: Enter a name for your Feature Flag, the same as you named it in your Rust application (e.g. `example_feature_flag`).

6. **Configure Feature Flag**: Configure targeting rules and other settings as desired.

7. **Save Feature Flag**: Click on "Create Feature Flag" to save your changes.

### Step 4: Toggle Your Feature Flag

You can now enable/disable your Feature Flag and configure its settings in the Statsig Console.

### Step 5: Run Your Application

In your terminal, navigate to your project directory (using cd statsig_rust_example) and run your application using the following command:

```
cargo run
```

You should see "Feature Flag is enabled!" printed to the console if the Feature Flag is enabled for the user with ID "a-user". Otherwise, you should see "Hello, World!".