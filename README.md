# XRPL-Discord-Price-Bot
Simple XRPL Dex price bot for discord

To Run Script:

1. Install Node JS and NPM (minimum version 16.x):

        (https://nodejs.org/en/download/)
        
2. Clone the repository

        git clone https://github.com/X33-Labs/XRPL-Discord-Price-Bot
        
3. Open a command prompt, powershell or terminal window. Navigate to the script folder and issue the npm install command:

        npm install
        
4. Create a new application and bot on discord. Make note of the bot token.

5. Open index.js in VS Code or Notepad and change the setting variables at the top of the file:

        //******************* REPLACE THESE VARIABLES *********************/
        const TOKEN_CURRENCY_NAME = 'PARC'; //Name of currency
        const TOKEN_CURRENCY = '5041524300000000000000000000000000000000'; //40 character 160 bit hex currency code
        const TOKEN_ISSUER = 'rE42R1mbjGtMzzFTL5aqpbTrj3TDVq71jo'; //Token Issuer
        const AVATAR_URL = 'https://secure.gravatar.com/avatar/cdee4d5018167873d2b108d9600627b6?d=mm&s=173'; //Avatar URL
        const UPDATE_FREQUENCY = 240; //Update Frequence in seconds
        //*************************************************************** */

6. Create a new file in the XRPL-Discord-Price-Bot directory called ".env" and add the following contents, replacing the 2 variables with your bot token and server ID

        DISCORD_BOT_TOKEN=*****YOUR BOT TOKEN HERE******
        DISCORD_SERVER_ID=*****DISCORD SERVER ID HERE*****
        
7. Invite your bot to the server of your choice with an authorize link below. Replace [***ClientID***] with your application Client ID you generated in discord

        https://discord.com/api/oauth2/authorize?client_id=[***ClientID HERE***]&permissions=0&scope=bot%20applications.commands
        

8. Start the script:

        node index.js
