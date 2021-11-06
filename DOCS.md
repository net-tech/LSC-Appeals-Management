# Documentation

__**Below are the commands, their functionality and the args/expected results.**__

Format:
**command (alias)** - Description
> Expected Args:
> Required Args: 

----------------------------------------------------------------------------------

**about (abt)** - Returns information about the developers, the bot, and any other pertinent information.

**access (acc)** - Grants users access to the server by comparing their uuid to the uuidv4 format, then by sending the code for manual verification. For additional usage information, see the **verify-confirm** command.
> Expected Args: caseID (uuidv4)
> Optional Args: userType (r)

**announce (an)** - Sends an announcement embed to previously defined channels. Adds a role ping depending on the role ID you put in the second argument. 
> Expected Args: server (predefined codewords), rolepingID (role ID), color, message (string)

**appeal (ap)** - Starts the appeal process via a thread within the command channel. This is also the source of the generated UUIDv4 code that is needed for entry. Use "a" for an Appeals case, and "g" for a General case
> Expected Args: apType (a/g)

**avatar (icon, av, pfp, profilepic)** - Displays a user's profile picture, or your's if no argument is provided.
> Optional Args: userID (id)

**decision (dec)** - Used by the Chief Justice / Appeals Court to send decisions to users involved.
> Expected Args: userID (id), caseID (uuid), decision (app/den), cond (boolean)
> Optional Args: comments (string)

**eval (ev)** - Owner-only command.

**lock (lc)** - Locks a channel from communication for an indeterminate time. The channel is only available for messaging for admins.
> Optional Args: reason (string)

**lsc-setbio (setbio)** - Sets a user's profile bio. THIS IS EXPERIMENTAL AS OF v1.0.0!
> Expected Args: bio (string)

**lsc-addserver (addserver)** - Appends a new server to a member's server employment resume. THIS IS EXPERIMENTAL AS OF v1.0.0!
> Expected Args: server (string)

**profile (me)** - Displays a user's profile. THIS IS EXPERIMENTAL AS OF v1.0.0!
> Expected Args: userID (id)

**lsc-register (lscr)** - Registers a new user profile. THIS IS EXPERIMENTAL AS OF v1.0.0!

**ping (p)** - Responds with the bot's ping and a corresponding color/message about stability.

**purge (pu)** - Mass-deletes messages within a channel.
> Expected Args: number (1 < n < 100)

**question (q)** - Sends a message, along with user details, to the Appeals Council.
> Expected Args: question (string)

**report (rc)** - Used for report management within LSC.
> Expected Args: status (verify | invalidate), messageid (id)

**role-create (roc)** - Used by staff to create new server roles and append them to the role list.
> Expected Args: member (id), color (hex), name (string)

**roles (r)** - Used in Appeals to add certain roles to members.
> Expected Args: target (id), type (def/rep/obs)

**setroles (sr)** - Adds or removes LSC ping roles from members at their own discretion.
> Expected Args: type (announcements/developer/alert/appeals/security/all)

**unlock (ulc)** - Reverses the effects of Lock.
> Expected Args: reason (string)

**unrole (ur)** - Takes Appeals roles away, counteracts the effects of Roles.
> Expected Args: target (id), type (def/rep/obs)

**verify (verifi)** - Manages LSC temporary verification.

**verify-confirm (vc)** - Confirms UUID verification as per the Access command. Can only be used by the Chief Justice.
> Expected Args: userID (id), placement (number)

**whois (who, who?, userinfo, user-info, lookup) - Looks up a global information file on a certain user.
> Expected Args: userID (id)
> Optional Args: -mobile

# Current as of Version 1.0.0
For any inquiries, contact the Project Manager, Blizzy#8953
