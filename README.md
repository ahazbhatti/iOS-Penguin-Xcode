from YOUR branch:
1. git fetch origin
2. git merge origin/dev

^ this will merge dev onto your branch.
make sure everything is tested and working before you do the next steps. 
only put working code on Dev, it should be working at all times.

3. git add .
4. git commit -m "message"
5. git push origin **your branch name**

6. git checkout dev
7. git merge origin/dev

** this is bc the first merge only merged into ur local branch**

8. git merge **your branch name**
9. test one more time, make sure everything is working correctly.
10. git push origin dev