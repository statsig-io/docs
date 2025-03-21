---
title: How to set up Feature Flags in Ruby
sidebar_label: Feature Flags in Ruby
slug: /developer-guides/feature-flags-in-ruby
displayed_sidebar: cloud
keywords:
  - owner:brock
last_update:
  date: 2024-09-25
---

To integrate feature flags into a Ruby application using the Statsig SDK, you'll start by setting up a simple Ruby "Hello World" app, then integrate Statsig to manage your feature flags. 

### Step 1: Create a Basic Ruby "Hello World" Application

1. **Setup Your Ruby Environment**:
   - Ensure Ruby is installed on your system. You can check by running `ruby -v` in your terminal. If Ruby is not installed, download and install it from [the official Ruby website](https://www.ruby-lang.org/en/downloads/) or use a version manager like `rbenv` or `rvm`.

2. **Create Your Ruby Script**:
   - Create a new directory for your project, then navigate into it.
   - Create a file named `app.rb`.
   - Open `app.rb` in your favorite text editor and add the following code:
     ```ruby
     puts 'Hello, World!'
     ```

3. **Run Your Application**:
   - In your terminal, run the Ruby script:
     ```sh
     ruby app.rb
     ```
   - You should see "Hello, World!" printed to the console.

### Step 2: Integrating Statsig for Feature Flags

1. **Add Statsig SDK to Your Project**:
   - In your project directory, create a file named `Gemfile` if it does not already exist.
   - Add the Statsig SDK to your `Gemfile`:
     ```ruby
     source 'https://rubygems.org'
     gem 'statsig'
     ```
   - Run `bundle install` in your terminal to install the gem.

2. **Initialize Statsig in Your Application**:
   - Modify `app.rb` to include initialization of the Statsig SDK and check a feature flag.
   - Here's how you can modify `app.rb`:
     ```ruby
     require 'statsig'
     
     # Initialize Statsig with your server secret key
     Statsig.initialize('your-server-secret-key')

     # Check if a feature flag is enabled for a user
     user = StatsigUser.new({
       'userID' => 'user_123', # Optional: Identify the user with a unique ID
     })

     if Statsig.check_gate(user, 'example_feature_flag')
       puts 'Feature Flag is enabled!'
     else
       puts 'Hello, World!'
     end
     
     Statsig.shutdown()
     ```
   - Replace `'your-server-secret-key'` with your actual Statsig Server Secret Key. Note: Ensure this key is kept secure and not exposed in client-facing code.
   - Replace `'example_feature_flag'` with the name of the feature flag you will create.

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
   - Visit [Statsig's website](https://www.statsig.com/) and sign up for an account or log in.

2. **Create a New Project**:
   - In the Statsig console, create a new project for your application.

3. **Navigate to Feature Flags**:
   - Access the "Feature Flags" section from the dashboard.

4. **Create a New Feature Flag**:
   - Click "Create Feature Flag".
   - Enter a name for your feature flag, such as `example_feature_flag`.
   - Configure targeting rules as needed.
   - Save your feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle Your Feature Flag**:
   - You can now enable or disable your feature flag from the dashboard and configure it as needed.

By following these steps, you've successfully integrated feature flags into your Ruby application using Statsig. This approach allows you to control and experiment with features in your app dynamically, facilitating smoother feature rollouts and management without needing to redeploy for every update or change.

   
