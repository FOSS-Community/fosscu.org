class Tree:
    def __init__(self,val=None):
        self.value = val
        if self.value:
            self.left = Tree()
            self.right = Tree()
        else:
            self.left = None
            self.right = None
#creating a node in the tree
t = Tree(5)
