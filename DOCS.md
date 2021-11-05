# Documentation

__**Below are the commands, their functionality and the args/expected results.**__

**about (abt)** - Returns information about the developers, the bot, and any other pertinent information.

**access (acc)** - Grants users access to the server by comparing their uuid to the uuidv4 format, then by sending the code for manual verification. For additional usage information, see the **verify-confirm** command.
> Expected Args: caseID (uuidv4)
> Optional Args: userType (r)

**announce (an)** - Sends an announcement embed to previously defined channels. Adds a role ping depending on the role ID you put in the second argument. 
> Expected Args: server (predefined codewords), rolepingID (role ID), color, message (string)

**appeal (ap)** - Starts the appeal process via a thread within the command channel. This is also the source of the generated UUIDv4 code that is needed for entry. Use "a" for an Appeals case, and "g" for a General case
> Expected Args: apType (a/g)


*This document is a work in progress.*
