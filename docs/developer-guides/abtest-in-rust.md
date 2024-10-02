---
title: How to run an AB Test in Rust
sidebar_label: First AB Test in Rust
slug: /developer-guides/abtest-in-rust
displayed_sidebar: cloud
---

Running a simple A/B experiment in a web page with Rust and the Statsig SDK only takes a couple steps, including setting up your Rust environment, integrating with Statsig for A/B testing, and configuring the experiment via the Statsig console. See below a 5-minute guide:

### Step 1: Set Up Your Rust Environment

First, you'll need to set up your Rust environment.

1. **Ensure Rust is Installed**:
    - Ensure Rust is installed on your system. If not, [you can download it from the official Rust website.](https://www.rust-lang.org/tools/install)

2. **Add Statsig as a Dependency**:
    - To use the SDK, add Statsig as a dependency in your `Cargo.toml`. The latest version can be found at crates.io/crates/statsig. We'll also install tokio to manage async calls. 
      ```toml
      [dependencies]
        statsig = "0.2.4"
        tokio = { version = "1.0", features = ["full"] }
      ```

### Step 2: Integrate Statsig for A/B Testing

1. **Initialize the SDK**:
    - After installation, you will need to initialize the SDK using a Server Secret Key from the Statsig console. Replace `'secret-key'` with your actual Statsig server-side SDK key. Its likely you'll want to write all of this inside your main function in your main.rs file, where Rust will look for an entry point.
      ```rust
      //At the top of your file
      use statsig::{Statsig};
      #[tokio::main]
      async fn main() {
      Statsig::initialize("secret-key").await;
      }
      ```

2. **Update Your Application for A/B Testing**:
    - Modify your application to use the call the Statsig SDK to fetch and get values from your experiment. This should come after initialization in your application, and will return the values from the SDK that you set up in y our A/B test on the Statsig console. Note - this code won't run until you create and start your experiment on the Statsig console. 

    - Ensure to replace `'your_experiment_name'` with the name of your experiment, and "backgroundColor" with the name of the parameter you add on the console. 
    ```rust
    #[tokio::main]
    async fn main() {
        // Initialize the Statsig SDK with your Server Secret Key
        Statsig::initialize("secret-key").await;
        // Check if a feature flag is enabled for a user
        let user = StatsigUser::with_user_id("a-user".to_string());

        let experiment = Statsig::get_experiment(&user, "your_experiment_name").ok().unwrap();
        let text_to_show = experiment.get("backgroundColor", "Hello, World!".to_string());

        println!("{}", text_to_show);

        // Shut down the Statsig SDK before exiting the application
        Statsig::shutdown().await;
    }
    ```

### Step 3: Creating the A/B Test in Statsig Console

1. **Log Into Statsig Console**:
    - Navigate to the [Statsig Console](https://console.statsig.com) and sign in.

2. **Create an Experiment**:
    - Navigate to the "Experiments" section and click "Create New".
    - Fill in the experiment details, including a unique name, in our example, `'your_experiment_name'`.

3. **Configure Experiment Variants**:
    - Define your variants, by default, control and test variants.
    - Add a parameter that will be returned by each variant and add values to them - in our case we've added "backgroundColor" as a parameter with "blue" and "red" as the values.

    ![image](https://github.com/statsig-io/.github/assets/74588208/8a667aeb-9189-4e7d-8a22-a42dabcdfe09)

4. **Launch Your Experiment**:
    - After setting up your variants and their parameters, save your configurations and start the experiment.

5. **Run your Rust file**:
In your terminal, navigate to your project directory (using cd statsig_rust_example) and run your application using the following command:
```
cargo run
```


By following these steps, you've set up a Rust application that utilizes Statsig to run an A/B test! You can use this sample to dynamically serve different content based on the experiment's variant, across all of your rust applications. See our [Rust SDK](/server/rustSDK) for more details, or join [the Statsig Slack community.](https://statsig.com/slack)