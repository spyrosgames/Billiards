var LineRendererMaterial : Material;

function OnTriggerEnter(other : Collider)
{

	var lineRenderer : LineRenderer = GetComponent(LineRenderer);
	lineRenderer.useWorldSpace = false;
	lineRenderer.SetWidth(0.05, 0.05);
	lineRenderer.SetVertexCount(2);
	lineRenderer.material = LineRendererMaterial;
	lineRenderer.SetPosition(1,Vector3(0,0,10));

}