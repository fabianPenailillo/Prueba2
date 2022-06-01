function validar()
{
    var nombre = document.formulario.txt_nombre.value
    var apellidos = document.formulario.txt_apellidos.value
    var telefono = document.formulario.txt_telefono.value
    var correo = document.formulario.txt_correo.value
    var rut = document.formulario.txt_rut.value

    if (nombre.length<2)
    {
        alert("Nombre debe tener al menos 2 caracteres")
        document.formulario.txt_nombre.focus();
        return false;
    }
    if (apellidos.length<2)
    {
        alert("Apellidos debe tener al menos 2 caracteres")
        document.formulario.txt_apellidos.focus();
        return false;
    }
    if (rut.length<9 || rut.length>10)
    {
        alert("RUT debe tener entre 9 y 10 caracteres")
        document.formulario.txt_rut.focus()
        return false
    }
    if (telefono.substring(0,3)!="+56")
    {
        alert("Teléfono debe comenzar con +56")
        document.formulario.txt_telefono.focus()
        return false;
    }
    if (correo.indexOf('@')<0 || correo.indexOf('.')<0)
    {
        alert("Debe ingresar un correo correcto")
        document.formulario.txt_correo.focus()
        return false
    }    
    alert("Todo correctamente ingresado")
    document.formulario.action() = "..."

}