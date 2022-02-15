from django.shortcuts import render, redirect
from .models import Todo
from .models import DoneList


# Create your views here.
def index(request):
    todo = Todo.objects.all()
    fl = DoneList.objects.all()

    if request.method == 'POST':
        new_todo = Todo(
            title=request.POST['title']
        )
        new_todo.save()
        return redirect('/')

    return render(request, 'index.html', {'todos': todo, 'finlst': fl})


def delete(request, pk):
    todo = Todo.objects.get(id=pk)

    done = DoneList(todo.id , todo.title)
    done.save()

    todo.delete()
    return redirect('/')
    
    
def return_todo(request , pk):
    dnls = DoneList.objects.get(id=pk)
    todo = Todo(dnls.id , dnls.title)
    todo.save()
    dnls.delete()
    return redirect('index')
