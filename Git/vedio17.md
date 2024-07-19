// how exactly internally git stores the data ?


-> internally git is a <key,value> data store

   where,

   key -> hash of the data we want to store
   -> it is 40 digit hexadecimal value
   -> for the same data this hash is same


   value -> actual data
   -> git stores the compressed data in a blob and some more metadata in the header

   blob -> big large object (it is generally a data type which is used to store the large piece of data in the object)


   value diagram ->

        --------------------------------------
        |      blob        |    size of      |  
        |                  |    content      |  
        |------------------------------------| 
        |   \0 (delimeter)                   |  
        |------------------------------------| 
        |                                    |  
        |     content of the data            |
        |                                    |  
        |                                    |  
        --------------------------------------


-> inside git content is only stored once


// how git handles the directories ?


-> Tree --> stores info. about directories & their content

-> Tree contains pointers to other blob (files object) & trees (directories object)



.git -> objects -> blob directories



--> git internally does a lot of optimisations, the objects are stored in compressed form.

--> git mainly shows data about the change & algorithmically shows us the file content with that change.


9. git cat-file "for type of file: -t" or "for printing the content of file: -p" <hash> 







// COMMIT :-

-> every commit object points to tree

-> the commit object has data of :-
    (i) author & commiter
    (ii) data
    (iii) message
    (iv) parent


10. git commit --amend -> it is used to amend previous git commit without creating another instance of commit in git log   

-> HEAD points to latest commit


11. git log --oneline -> it points to HEAD (latest commit)



--> whenever we code it lies in the following area:-

        (i) working area
        (ii) staging area
        (iii) Repo

    (i) Working area -> the files/changes which are not in your staging area and may be currently not handled by git are in working area . This files/changes are also called untracked files.

    (ii) staging area :

        -> files and changes which are surely going to be the part of next commit are in staging area.
        (i.e. on files/changes when we do git add )

        -> staging area is the place where we get to know what will change between the current & next commit


 12. git rm --cached <filename> -> it is used to remove whole file from staging area

 13. git restore --staged <filename> -> it is used to restore the previous change on the file which already to staging area   

       (iii) repo area : all our commit content 




       






