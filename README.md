<p align="center">
  <img src="https://github.com/MRCYODev/Steam-Library-GameID-Exporter/blob/main/steam-icon.png" alt="Steam Icon" width="200">
</p>

<h1 align="center">Steam Library GameID Exporter</h1>

<p align="center">
  <em>Effortlessly export your Steam library game IDs</em>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#example-output">Example Output</a> •
  <a href="#license">License</a> •
  <a href="#feedback-and-contributions">Feedback and Contributions</a>
</p>

<p align="center">
<b>
<a href="https://github.com/MRCYODev/Steam-Library-GameID-Exporter/releases/download/1.0.0/main.zip">Download zip</a>
</b>
</p>



---


| :warning: WARNING          |
|:---------------------------|
| This script may not work as expected if you don't have a minimum of $5 added to your Steam account. Steam's API may impose restrictions on accounts without a sufficient balance, potentially affecting the accuracy of the results.    |


## Overview

The **Steam Library GameID Exporter** is a Node.js script that empowers you to seamlessly export game IDs from your Steam library using the Steam Web API. This guide will walk you through the process of setting up and utilizing the script.

## Prerequisites

Before diving in, ensure you have the following prerequisites in place:

1. **Node.js:** Verify that Node.js is installed on your system. If not, you can download it from the [official Node.js website](https://nodejs.org/).

2. **Git (Optional):** While not mandatory, using Git for version control is highly recommended. Install Git from [Git Downloads](https://git-scm.com/downloads).

3. **Steam API Key:** Obtain a Steam Web API key by following the instructions on the [Steam Web API Key Registration](https://steamcommunity.com/dev/apikey) page.

4. **Steam User ID:** Identify your unique Steam User ID, which will be used to fetch your game library data. You can easily find your Steam User ID by using [Steam ID Finder](https://steamidfinder.com/).

5. **Environment Configuration:** Create a `.env` file in the project directory with your API key and Steam User ID using this format:

```env
STEAM_API_KEY=your_api_key_here
STEAM_USER_ID=your_steam_user_id_here
```

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/your-username/Steam-Library-GameID-Exporter.git
```

2. Navigate to the project directory:
```
cd Steam-Library-GameID-Exporter
```

3. Install the required dependencies:
```
npm install
```

## Usage

1. Run the script to export your Steam library game IDs:

```
node index.js
```
or
```
node name-ids.js
```

2. The script will make an API request to Steam, retrieve your game IDs, and export them to a text file named "exportedIDS.txt" in the project directory.

3. You can find your exported game IDs in the "exportedIDS.txt" file.


## Example Output
> Here's an example of what the "exportedIDS.txt" file might look like:
```
730, 570, 440, 105600, 4000
```

## License

This project is open-source and is available under the [MIT License](https://github.com/MRCYODev/Steam-Library-GameID-Exporter/blob/main/LICENSE).

## Feedback and Contributions
If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/MRCYODev/Steam-Library-GameID-Exporter/issues) or feel free to submit a pull request.

